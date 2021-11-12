import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
    velopert : {
        name : '안병훈',
        description : '리액트를 시작하는 개발자'
    },
    gildong : {
        name : '홍길동',
        description : '고전 소설 홍길동의 주인공'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;  // username 값 조회
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자 입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    )
}

export default Profile;