import React from "react"
import Table from 'react-bootstrap/Table'
import ItemDesktop from './ItemDesktop'
import ItemMobile from './ItemMobile'
import {
    BrowserView,
    MobileView
} from "react-device-detect";

function Titles({ results }) {
    return (
        <div>
            <BrowserView>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((value,index) => {value.index = index+1; return <ItemDesktop iteminfo={value} />})}
                    </tbody>
                </Table>
            </BrowserView>
            <MobileView>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title & Artist</th>
                            <th>Album</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((value,index) => {value.index = index+1; return <ItemMobile iteminfo={value} />})}
                    </tbody>
                </Table>
            </MobileView>
        </div>
    );
};

export default Titles;