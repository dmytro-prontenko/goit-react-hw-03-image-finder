import React from 'react';
import { StyledForm, StyledHeader, StyledInput } from './SearchBar.Styled';
import Button from 'components/Button/Button';

class SearchBar extends React.Component {
  state = {
    currentQuery: '',
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setQuery(this.state.currentQuery);

    this.setState({ currentQuery: '' });
  };

  render() {
    return (
      <>
        <StyledHeader className="search-bar">
          <StyledForm className="form" onSubmit={this.handleSubmit}>
            <Button />
            <StyledInput
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              name="currentQuery"
              placeholder="Search images and photos"
              onChange={this.handleInputChange}
              value={this.state.currentQuery}
            />
          </StyledForm>
        </StyledHeader>
      </>
    );
  }
}

export default SearchBar;
