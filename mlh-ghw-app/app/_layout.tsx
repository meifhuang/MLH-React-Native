import { Tabs } from "expo-router"
import { StyleSheet, Text, View } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { theme } from '../theme'; 
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.colors.blue
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: 'Tasks' ,
                    tabBarIcon: ({color}) => ( <Octicons name="list-unordered" size={24} color={color} /> ),
                    headerRight: () => ( <Ionicons name="add" size={24} style={styles.rightHeader}/> )
            }
        }
            />
            <Tabs.Screen 
                name="completed"
                options={{
                    title: 'Completed',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    rightHeader: {
        color: theme.colors.blue,
        margin: 5
    }
})