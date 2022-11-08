import React, { useState } from 'react';
import { Button, Text, StyleSheet } from 'react-native';

export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        <>
            <Text style={styles.medText}> Counter {count}</Text>
            <Button title={'Counter++'} color='red' onPress={()=>setCount(count + 1)}/>
            <Button title={'Reset me bro'} color='red' onPress={()=>setCount(0)}/>
            <Button title={'Counter--'} color='red' onPress={()=> count > 0 ? setCount(count - 1): null}/>
        </>
    )
}

const styles = StyleSheet.create({
    medText:{
        fontSize: 24,
        margin: 16,
    }
})