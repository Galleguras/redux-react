import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import  ListItem  from './components/ListItem';
import { connect } from 'react-redux';

/* const ss = [
  { id: 1, desc: 'todo 1', completed: false },
  { id: 2, desc: 'todo 2', completed: false },
]; */
const App = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => (
          <ListItem onPress={() => {}} desc={item.desc} />
        )}
      />
    </View>
  );
};
const mapsStateToProps = state => {
  console.log(state.todos);
  return { data: state.todos };
};
export default connect(mapsStateToProps)(App);

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
});
