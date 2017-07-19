import React, { Component } from 'react';
import { View, Image, TouchableHighlight, Share } from 'react-native';

import ImageNY1 from '../../assets/NY1.jpg';
import ImageNY2 from '../../assets/NY2.jpg';
import ImageNY3 from '../../assets/NY3.jpg';

const imgs = [ImageNY1, ImageNY2, ImageNY3];

const INTERVAL_DELAY = 2000;

export default class SampleState extends Component {

  static onPressButton() {
    Share.share({
      message: 'Share message',
      title: 'Share Title',
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };

    this.startInterval();
  }

  getImage() {
    return (
      <TouchableHighlight onPress={this.onPressButton}>
        <Image source={imgs[this.state.currentImage]} />
      </TouchableHighlight>
    );
  }

  startInterval() {
    setInterval(() => {
      let idx = this.state.currentImage;
      idx = (idx + 1 > imgs.length - 1) ? 0 : idx + 1;

      this.setState({ currentImage: idx });
    }, INTERVAL_DELAY);
  }

  render() {
    const image = this.getImage();
    return (
      <View>
        {image}
      </View>
    );
  }
}
