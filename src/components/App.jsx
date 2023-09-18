import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { getData } from 'services/imgAPI';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  state = {
    items: [],
    loading: false,
    q: '',
    page: 1,
    per_page: 12,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, q, per_page } = this.state;
    const data = await getData({
      q,
      page,
      per_page,
    });
    if (prevState.page !== page) {
      this.setState(prevState => ({
        items: [...prevState.items, ...data],
        // page: prevState.page + 1,
      }));
    }

    // const { page, q, per_page } = this.state;

    //   try {
    //     const data = await getData({
    //       q,
    //       page,
    //       per_page,
    //     });
    //     this.setState(prevState => ({
    //       items: [...prevState.items, ...data],
    //       // page: prevState.page + 1,
    //     }));
    //   } catch (error) {
    //     toast.error(`${error.message}`);
    //   } finally {
    //     console.log('Done');
    //   }

    // this.handleFetchImages(this.state.searchQuery)
  }

  setQuery = q => {
    this.setState({ q });
    console.log(`Form submited with ${q}`);
  };

  handleFetchImages = async searchQuery => {
    const { page, q, per_page } = this.state;

    try {
      const data = await getData({
        q: searchQuery,
        page,
        per_page,
      });
      this.setState({
        items: [...data],
      });
    } catch (error) {
      toast.error(`${error.message}`);
    } finally {
      console.log('Done');
    }
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <>
        <SearchBar
          setQuery={this.setQuery}
          getImages={this.handleFetchImages}
        />
        {this.state.items.length ? (
          <>
            <ImageGallery imagesToView={this.state.items} />
            <button type="button" onClick={this.handleLoadMore}>
              Load more
            </button>
          </>
        ) : null}
        <ToastContainer />
      </>
    );
  }
}

export default App;
