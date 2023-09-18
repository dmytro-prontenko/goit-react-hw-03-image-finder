import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { getData } from 'services/imgAPI';
import { ToastContainer, toast } from 'react-toastify';
import { StyledLoadMore } from './LoadMoreButton/LoadMoreButton.Styled';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    items: [],
    loading: false,
    q: '',
    page: 1,
    per_page: 12,
    totalHits: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, q, per_page } = this.state;
    if (prevState.page !== page || prevState.q !== q) {
      try {
        const { hits, totalHits } = await getData({
          q,
          page,
          per_page,
        });

        this.setState(prevState => ({
          items: [...prevState.items, ...hits],
          totalHits,
        }));
        toast.success(
          `Shown ${
            per_page * page <= totalHits ? per_page * page : totalHits
          } images from ${totalHits}`,
          {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            theme: 'colored',
          }
        );
      } catch (error) {
        toast.error(`${error.message}`, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: 'colored',
        });
      }
    }
  }

  setQuery = q => {
    this.setState({ q, page: 1, items: [] });
    // this.setState({  });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { per_page, totalHits } = this.state;
    return (
      <>
        <SearchBar
          setQuery={this.setQuery}
          getImages={this.handleFetchImages}
          data={this.state}
        />
        {this.state.items.length ? (
          <>
            <ImageGallery imagesToView={this.state.items} />
            {this.state.items.length < totalHits && (
              <StyledLoadMore type="button" onClick={this.handleLoadMore}>
                Load more
              </StyledLoadMore>
            )}
          </>
        ) : null}
      </>
    );
  }
}

export default App;
