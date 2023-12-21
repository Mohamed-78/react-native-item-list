// listitem.style.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    marginLeft: 10,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  horizontalLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c7c6c6",
    alignSelf: "center",
    width: "100%",
    height: 0.5,
  },
});

export default styles;