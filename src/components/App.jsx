import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { getData } from 'services/imgAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    items: [],
    loading: false,
    q: '',
    page: 1,
    per_page: 12,
    totalHits:null
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, q, per_page, totalHits} = this.state;

    try {
      const { hits } = await getData({
        q,
        page,
        per_page,
      });
      if (prevState.page !== page) {
        this.setState(prevState => ({
          items: [...prevState.items, ...hits],
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
      }
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

  setQuery = q => {
    this.setState({ q });
  };

  handleFetchImages = async searchQuery => {
    const { page, q, per_page } = this.state;

    try {
      const { hits, totalHits } = await getData({
        q: searchQuery,
        page,
        per_page,
      });
      if (hits.length) {
        this.setState({
          items: [...hits], totalHits
        });
        toast.success(`Shown ${per_page} images from ${totalHits}`, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: 'colored',
        });
      } else {
        throw new Error('Nothing found');
      }
    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'colored',
      });
    } finally {
    }
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const {per_page,totalHits} = this.state
    return (
      <>
        <SearchBar
          setQuery={this.setQuery}
          getImages={this.handleFetchImages}
        />
        {this.state.items.length ? (
          <>
            <ImageGallery imagesToView={this.state.items} />
            {this.state.items.length < totalHits &&  <button type="button" onClick={this.handleLoadMore}>
              Load more
            </button>}
          </>
        ) : null}
      </>
    );
  }
}

export default App;
