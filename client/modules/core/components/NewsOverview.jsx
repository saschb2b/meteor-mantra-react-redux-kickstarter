import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 24,
  },
  card: {
    width: 300,
    marginBottom: 24,
    position: 'relative',
  },
  cardImage: {
    height: 200,
  },
  cardText: {
    marginBottom: 52,
  },
  cardAction: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
};

const newsTileData = [
  {
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum dolor sit',
    image: 'http://lorempixel.com/600/337/nature/',
    text: 'Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit',
  },
  {
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum dolor sit',
    image: 'http://lorempixel.com/600/337/nature/',
    text: 'Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit',
  },
  {
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum dolor sit',
    image: 'http://lorempixel.com/600/337/nature/',
    text: 'Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit',
  },
  {
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum dolor sit',
    image: 'http://lorempixel.com/600/337/nature/',
    text: 'Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit',
  },
];

export class NewsOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="newsOverview" style={styles.root}>
        {newsTileData.map(tile => (
          <Card style={styles.card}>
            <CardMedia>
              <img style={styles.cardImage} src={tile.image}/>
            </CardMedia>
            <CardTitle title={tile.title} subtitle={tile.subtitle}/>
            <CardText style={styles.cardText}>{tile.text}</CardText>
            <CardActions style={styles.cardAction}>
              <FlatButton
                label="Mehr"
                linkButton={true}
                href="/news/1"
              />
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}
