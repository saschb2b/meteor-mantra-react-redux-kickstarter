import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
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

export class NewsCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="newsCard">
        <Card style={styles.card}>
          <CardMedia>
            <img
              style={styles.cardImage}
              src={this.props.image}
            />
          </CardMedia>
          <CardTitle
            title={this.props.title}
            subtitle={this.props.subtitle}
          />
          <CardText style={styles.cardText}>
            {this.props.text}
          </CardText>
          <CardActions style={styles.cardAction}>
            <FlatButton label="Mehr" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

NewsCard.proptypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  image: React.PropTypes.string,
  text: React.PropTypes.string,
};
