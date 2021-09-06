import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import QuotetionsItems from './QuotentiosItems';
import styles from './styles';

export default function QuotetionsList(props) {
  const daysQuery = props.filterDay

  
  return (
    <Fragment>
      <View style={styles.filters} >
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(7)}
        >
          <Text style={styles.textButtonQuery}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(15)}
        >
          <Text style={styles.textButtonQuery}>15D</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(30)}
        >
          <Text style={styles.textButtonQuery}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(90)}
        >
          <Text style={styles.textButtonQuery}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(180)}
        >
          <Text style={styles.textButtonQuery}>6M</Text>
        </TouchableOpacity>
      </View >
      <ScrollView style={styles.listQuotationBitcoins}>
        <FlatList
          data={props.listTransactions}
          keyExtractor={(item, index)=> String(index)}
          renderItem={({item}) => {
            return <QuotetionsItems valor={item.valor} data={item.data} />
          }}
        />
      </ScrollView>
    </Fragment>
  );

}
