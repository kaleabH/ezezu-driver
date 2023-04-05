import React, { ReactNode } from 'react';
import { StyleSheet, View} from 'react-native';
interface Props {
    [key: string]: any;
    children: (style: typeof styles.card)=>ReactNode;

}

const Card: React.FC<Props> = (props: Props) => {
  return (
    <View>
        {props.children(styles.card)}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        justifyContent:"center",
        alignItems: "center",
        borderColor: "black",
        borderRadius: 8,
    backgroundColor: "#FFFFFF",
        // marginVertical: 20
      },
})

export default Card