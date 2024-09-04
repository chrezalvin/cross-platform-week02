import { Image, ScrollView, Text, View } from 'react-native';
import styles from "./styles";
import peopleData from "./assets/data.json";

interface PeopleData{
  name: string;
  email: string;
  photo_url: string;
}

export default function App() {
  function avatarUI(student: PeopleData){
    return (
      <View style={styles.cardContainer}>
        <Image 
          style={styles.portrait}
          source={{uri: student.photo_url}} 
        />
        <View style={styles.containerBasic}>
          <Text style={[styles.bigger, styles.bold]}>{student.name}</Text>
          <Text style={styles.muted}>{student.email}</Text>
        </View>
      </View>
    );
  }

  const avatarList = peopleData.map(people => avatarUI(people));
  
  return (
    <ScrollView
      contentContainerStyle={[styles.container, styles.paddingBig]}
    >
      <Text style={[styles.title, styles.paddingBig]}>Students</Text>
      {avatarList}
    </ScrollView>
  );
}