import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Layout } from '@ui-kitten/components'
import MySearch from '../../common/components/inputs'
import { ActivityIndicator } from 'react-native'
import { IconContacts } from '../../common/icons/contactsicon'
import { Phone } from '../../common/icons/Contactdetailsicons/phone'
const Contacts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const url = "";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setImageUrl(json.imageUrl); // Assuming imageUrl is the property containing the image URL
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={{ width: "100%" ,padding:16,backgroundColor:"white",flex:1}}>
        <MySearch />
        <View>
          {/* {loading ? ( // Use the loading state here to conditionally render the ActivityIndicator
            <ActivityIndicator />
          ) : (
            data.map((post) => ( */}
              <View
                style={styles.ContactCard}
                // key={post.id} // Assuming there's an "id" property in your contact data
              >
                <View
                  style={styles.contactsImg}
                >
                  <Image
                  source={{ uri: imageUrl }}
                  style={styles.contactsImg}
                />
                </View>
                <View style={{paddingHorizontal:16}}>
                <Text >Kunal Sharan</Text>
                </View>
                <View style={{position:"absolute",right:"2%"}}><Phone/></View>
              </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default Contacts;

const styles = StyleSheet.create({
  ContactCard:{
    width:"100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(237, 221, 221, 0.7)",
    padding: 16,
    alignItems: "center"
  },
  contactsImg:{
   resizeMode:"contain",
    color:"white",
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    // Drop shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
});
