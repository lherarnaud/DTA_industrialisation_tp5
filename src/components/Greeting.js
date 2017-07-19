import React, { PropTypes } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
});


export default function Greeting(props) {
  return (

    <View>
      <Text>Hello {props.name}!</Text>
      <View style={styles.margin}>
        <Button
          onPress={() => {
            props.handleFunction({
              name: props.name,
            });
          }}
          title="Click me"
        />
      </View>
    </View>
  );
}

Greeting.defaultProps = {
  handleFunction: () => {},
  name: 'Default value',
};

Greeting.propType = {
  name: PropTypes.string,
  handleFunction: PropTypes.func.required,
};

Greeting.propTypes = {
  handleFunction: PropTypes.func.required,
  name: PropTypes.string.required,
};
