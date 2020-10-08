import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

class DogApi extends React.Component {
  constructor() {
    super();

    this.fetchDog = this.fetchDog.bind(this);
    this.state = {
      dogImg: undefined,
      loading: true
    }
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    this.setState(
      { loading: true },  // primeiro parametro
      async () => {
        const resultFetch = await fetch('https://dog.ceo/api/breeds/image/random');
        const resultObject = await resultFetch.json();
        this.setState({
            loading: false,
            dogImg: resultObject.message
        })
    })
  }

  renderImage(dogImg) {
    return (
      <img alt="Dogs" src={dogImg} width='300px' />
    )
  }

  render() {
    const { dogImg, loading } = this.state;
    console.log(dogImg);
    const loadingElement = <span>Loading...</span>
    return (
      <div>
        <Container container spacing={6}>
          <h1>Dog API</h1>
          <Button variant="contained" color="secondary" onClick={this.fetchDog}>Choose your Dog</Button>
          <div>
            {loading ? loadingElement : this.renderImage(dogImg)}
          </div>
        </Container>
      </div>

    )
  }
}

export default DogApi;