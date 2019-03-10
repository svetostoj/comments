import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

// class App extends React.Component {
//     render() {
//         window.navigator.geolocation.getCurrentPosition(pos=>console.log(pos), err=>console.log(err))
//         return <div>Latitude: </div>
//     };
// };
const App = function (){

    return (
        <div className="ui container comments">
        <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today 4:34 pm" content="Nice blog Post!" avatar={Faker.image.avatar()}/>
        </ApprovalCard>

        <  ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today 3:22 pm" content="I like the subject!" avatar={Faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday 4:34 pm" content="Jerry ne seri!" avatar={Faker.image.avatar()}/ >
        </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))