import {LoremIpsum} from 'lorem-ipsum';
import React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import EnhancedCard from '../components/Card';
import database from '../model/database';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

// Shortcut syntax:
const postsCollection = database.get('posts');

const DBTestScreen = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    console.log('use effect ran', posts);
    const func = async () => {
      console.log('entered use effect');
      setposts(await postsCollection.query().fetch());
    };
    func();
    console.log('finished use effect');
    return () => {
      console.log('unmounting');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Text>DB Test Screen</Text>
      <ScrollView>
        {posts.map((v, i) => {
          return <EnhancedCard key={i} post={v} />;
        })}
      </ScrollView>
      <Button
        onPress={async () => {
          console.log('button pressed');
          setposts(await postsCollection.query().fetch());
        }}
        title="change state"
      />
      <TouchableOpacity
        onPress={async () => {
          await database.action(async () => {
            const newPost = await postsCollection.create(post => {
              post.title = lorem.generateWords(2);
              post.body = lorem.generateParagraphs(2);
            });
            console.log(newPost);
          });
          setposts(await postsCollection.query().fetch());
        }}>
        <Text>Add New</Text>
      </TouchableOpacity>
      <Button
        onPress={async () => {
          await database.action(async () => {
            await (await postsCollection.find(posts[0].id)).update(post => {
              post.title = lorem.generateWords(2);
              post.body = lorem.generateParagraphs(1);
            });
          });
        }}
        title="update a post"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default DBTestScreen;
