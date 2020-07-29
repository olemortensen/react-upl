import React from 'react';
import axios from 'axios';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }

    addDirectory(node) {
        if (node) {
            node.directory = true;
            node.webkitdirectory = true;
        }
    }

    render() {
        return (
            <div>
                <p>Select The Directory:
                    <input ref={node => this.addDirectory(node)} type='file' onChange={this.onChangeHandler}/>
                </p>
                <p>You can select any directory with multiple files or multiple child directories in it.</p>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload
                </button>
            </div>
        );
    }

    onClickHandler = () => {
        const data = new FormData()
        for (let i = 0; i < this.state.selectedFile.length; i++) {
            data.append('file', this.state.selectedFile[i])
        }

        axios({
            method: 'POST',
            url: 'http://localhost:5000/upload',
            data: data
        }).then( res => {
                console.log(res)
            })
    }

    onChangeHandler = (event) => {

        console.log(event.target.files)
        this.setState({
            selectedFile: event.target.files,
            loaded: 0,
        })

    }


}

