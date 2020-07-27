import React from 'react';

export default class Upload extends React.Component {


    render() {
        return (
            <div>
                <p>Select The Directory:
                    <div dangerouslySetInnerHTML={this.createMarkup()}/>
                </p>
                <p>You can select any directory with multiple files or multiple child directories in it.</p>
            </div>
        );
    }

    createMarkup() {
        return {__html: '<input type="file" webkitdirectory mozdirectory/>'};
    }


}

