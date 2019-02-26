import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Segment, Content, Tabs, Tab, Card, CardItem, List, ListItem, Footer} from 'native-base';


export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            
          </Left>
          <Body>
            <Title>Time Table</Title>
          </Body>
          <Right />
        </Header>

        <Tabs>
          <Tab heading="Mon">
            
              
              <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Monday</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Content>
          <List>
            <ListItem>
              <Text>09:00 - 09:50 Operating Systems G5</Text>
            </ListItem>
            <ListItem >
              <Text>10:00 - 10:50 EVS LT2</Text>
            </ListItem>
            <ListItem >
              <Text>11:00 - 11:50 English TS1</Text>
            </ListItem>
            <ListItem >
              <Text>12:00 - 12:50 Maths G8</Text>
            </ListItem>
            <ListItem>
              <Text>02:00 - 02:50 Algo LT1</Text>
            </ListItem>
            <ListItem>
              <Text>03:00 - 03:50 Fuzzy Logic G6</Text>
            </ListItem>
            <ListItem>
              <Text>04:00 - 04:50 Algo Tut TS13</Text>
            </ListItem>
          </List>
        </Content>
              </Body>
            </CardItem>
            
          </Card>
        </Content>
              
          </Tab>
          <Tab heading="Tue">
          <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Tuesday</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Content>
          <List>
            <ListItem>
              <Text>09:00 - 10:50 Algo Lab CL1</Text>
            </ListItem>
            
            <ListItem >
              <Text>11:00 - 11:50 Operating Systems LT2</Text>
            </ListItem>
            <ListItem >
              <Text>12:00 - 12:50 Algo LT5</Text>
            </ListItem>
            
            <ListItem>
              <Text>03:00 - 03:50 Operating Systems TS9</Text>
            </ListItem>
            <ListItem>
              <Text>04:00 - 04:50 English  G3</Text>
            </ListItem>
          </List>
        </Content>
              </Body>
            </CardItem>
            
          </Card>
        </Content>
          </Tab>
          <Tab heading="Wed">
          <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Wednesday</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Content>
          <List>
            <ListItem>
              <Text>09:00 - 09:50 EVS FF4</Text>
            </ListItem>
            <ListItem >
              <Text>10:00 - 10:50 Algo G6</Text>
            </ListItem>
            <ListItem >
              <Text>11:00 - 11:50 Fuzzy Logic LT2</Text>
            </ListItem>
            <ListItem >
              <Text>12:00 - 12:50 Maths Tut TS7</Text>
            </ListItem>
            
          </List>
        </Content>
              </Body>
            </CardItem>
            
          </Card>
        </Content>
          </Tab>
          <Tab heading="Thrs">
          <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Thursday</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Content>
          <List>
            <ListItem>
              <Text>09:00 - 10:50 Operating Systems Lab CL1</Text>
            </ListItem>
            
            <ListItem >
              <Text>12:00 - 12:50 Maths G8</Text>
            </ListItem>
            
            <ListItem>
              <Text>03:00 - 03:50 EVS G5</Text>
            </ListItem>
            <ListItem>
              <Text>04:00 - 04:50 English G3</Text>
            </ListItem>
          </List>
        </Content>
              </Body>
            </CardItem>
            
          </Card>
        </Content>
          </Tab>
          <Tab heading="Fri">
          <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Friday</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Content>
          <List>
            <ListItem>
              <Text>09:00 - 09:50 Fuzzy Logic G6</Text>
            </ListItem>

            <ListItem >
              <Text>11:00 - 11:50 Fuzzy Logic Tut TS9</Text>
            </ListItem>
            <ListItem >
              <Text>12:00 - 12:50 Maths G8</Text>
            </ListItem>
            <ListItem>
              <Text>03:00 - 04:50 Algo Lab CL1</Text>
            </ListItem>

          </List>
        </Content>
              </Body>
            </CardItem>
            
          </Card>
        </Content>
          </Tab>
          <Tab heading="Sat">
          <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Saturday</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Content>
          <List>
            
            <ListItem >
              <Text>11:00 - 11:50 Operating Systems LT5</Text>
            </ListItem>
           
          </List>
        </Content>
              </Body>
            </CardItem>
            
          </Card>
        </Content>
          </Tab>
        </Tabs>
        <Footer>
          
              <Text>Sunny Dhama</Text>
            
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
