import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dashboard';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BookmarkBold, BookmarkLight, DocumentBold, DocumentLight, HomeBold, HomeLight, ProfileBold, ProfileLight, SearchBold, SearchLight } from '../assets/icons';
import { Profile } from '../screens/Profile';


const Tab = createBottomTabNavigator();

export default function TabRoute() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary[500],
        tabBarLabelStyle: {
          fontSize: RFValue(10),
          fontFamily: theme.fonts.bold
        },
        headerShown: false,
        tabBarStyle: {
          padding: 15
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <HomeBold fill={theme.colors.primary[500]} />
            ) : (
              <HomeLight stroke={theme.colors.icon} />
            );
          },
          tabBarLabelStyle: {
            fontSize: RFValue(10),
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <SearchBold fill={theme.colors.primary[500]} />
            ) : (
              <SearchLight stroke={theme.colors.icon} />
            );
          },
          tabBarLabelStyle: {
            fontSize: RFValue(10),
          },
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <DocumentBold fill={theme.colors.primary[500]} />
            ) : (
              <DocumentLight stroke={theme.colors.icon} />
            );
          },
          tabBarLabelStyle: {
            fontSize: RFValue(10),
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <ProfileBold fill={theme.colors.primary[500]} />
            ) : (
              <ProfileLight stroke={theme.colors.icon} />
            );
          },
          tabBarLabelStyle: {
            fontSize: RFValue(10),
          },
        }}
      />
    </Tab.Navigator>
  );
}