import React from "react";
import {
    follow,
    initialStateUsersType,
    setCurrentPage,
    setUsers, setTotalUsersCount, toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";


import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component<AllUsersType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(
            data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)

            }
        );
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(
            (data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            }
        );
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            {this.props.isFetching ? <Preloader/>: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
            />
        </div>
    }

}

type mapStateToProps = {
    users: Array<initialStateUsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<initialStateUsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching:boolean) => void
}

export type AllUsersType = mapStateToProps & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);