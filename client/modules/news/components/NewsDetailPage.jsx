import React from 'react'

const styles = {
  root: {
    margin: '0 auto',
    maxWidth: 600,
    padding: 24
  },
  title: {
    marginBottom: '.3em'
  }
}

const newsTileData = {
  title: 'Lorem ipsum dolor sit',
  subtitle: 'Lorem ipsum dolor sit',
  image: 'http://lorempixel.com/600/337/nature/',
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
}

export class NewsDetailPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.root}>
        <h2 style={styles.title}>
          {newsTileData.title}
        </h2>

        <p>
          {newsTileData.text}
        </p>
      </div>
    )
  }
}
