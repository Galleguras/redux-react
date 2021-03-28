import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { complete, submit } from './reducers/todos';
import Input from './components/Input';

/* const ss = [
  { id: 1, desc: 'todo 1', completed: false },
  { id: 2, desc: 'todo 2', completed: false },
]; */
const App = ({ data, complete, submit }) => {
  const [value, setValue] = useState('');
  const handleChange = (val) => {
    setValue(val);
  };
const handleSubmit =() => {
  submit(value)
  setValue('')
}
  return (
    <View style={styles.container}>
      <Input
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={value}
      ></Input>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(x) => String(x.id)}
        renderItem={({ item }) => (
          <ListItem
            completed={item.completed}
            onPress={() => complete(item.id)}
            desc={item.desc}
          />
        )}
      />
    </View>
  );
};
const mapsStateToProps = (state) => {
  console.log(state.todos);
  return { data: state.todos };
};
const mapsDispatchToProps = (dispatch) => ({
  complete: (id) => dispatch(complete(id)),
  submit: (val) => dispatch(submit(val)),
});
export default connect(mapsStateToProps, mapsDispatchToProps)(App);

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
