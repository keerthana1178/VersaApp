import React from 'react';
import withObservables from '@nozbe/with-observables';
import {View, Text, StyleSheet} from 'react-native';

const Card = ({post}) => {
  return (
    <View>
      <Text style={styles.title}>
        Post Title: {post.title}, post ID: {post.id}
      </Text>
      <Text>Content: {post.body}</Text>
    </View>
  );
};

const enhance = withObservables(['post'], ({post}) => ({
  post,
}));

const EnhancedCard = enhance(Card);

export default EnhancedCard;

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#7cd6f9',
  },
});
