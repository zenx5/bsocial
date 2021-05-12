import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function PostCard ({ post }) {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.postBody}>{post.body}</Text>
      <Text style={styles.postAuthor}>{post.author}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#dfefff',
    marginHorizontal: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#d1dcdf',
    borderRadius: 5,
    padding: 10
  },
  postBody: {
    fontSize: 16,
    color: '#292944'
  },
  postAuthor: {
    alignSelf: 'flex-end',
    color: '#6e6e7e',
    fontSize: 14,
    fontFamily: 'Poppins-Regular'
  }
})
