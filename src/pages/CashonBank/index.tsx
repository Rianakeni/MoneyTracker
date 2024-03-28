import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageHeader, Gap, TextInput, Button} from '../../components';

const CashonBank = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Cash On Bank"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <View>
          <TextInput label="Description" placeholder="Add the description" />
        </View>
        <View style={{marginTop: 17}}>
          <TextInput label="Type" placeholder="Debit / Credit" />
        </View>
        <View style={{marginTop: 22}}>
          <Button label="save" />
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>Last 3 Transactions</Text>
      </View>
    </ScrollView>
  );
};

export default CashonBank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    height: 296,
    paddingHorizontal: 24,
    paddingTop: 13,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
});
