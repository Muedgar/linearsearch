import React, { Component } from 'react';
import { View, Button } from 'react-native';

class App extends Component {
  linearSearch () {
    var arrayToSearch = [1,3,4,5,6,67,7];
    var search = 5;
    for (var i = 0; i < arrayToSearch.length; i++) {
      if (arrayToSearch[i] === search) {
        var answer = "The number " + search + " is found at position " + i;
        alert(answer);
      }
    }
  };
  render() {
    return (
      <View>
       <Button
         title="view answer"
         color="#333"
         onPress={this.linearSearch}
       >
       </Button>
      </View>
    );
  }
}

export default App;
