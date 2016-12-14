import React, {Component} from 'react';

import {Loader} from '../src/index.js';

export default class LoaderStory extends Component {

    render() {
        return (
            <div className='ltr'>
                <h2>Loader</h2>
                <h3>Attributes</h3>
                <table className='attributes'>
                    <tbody>
                        <tr>
                            <th>Attribute name</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>string (small, medium, large)</td>
                            <td>The size of loader. Default is medium.</td>
                        </tr>
                        <tr>
                            <td>text</td>
                            <td>string</td>
                            <td>Text to be shown below the loader.</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Examples</h3>
                <p>Small</p>
                <Loader size="small"/>
                <p>Medium</p>
                <Loader size="medium"/>
                <p>Large</p>
                <Loader size="large"/>
                <p>Large with text</p>
                <Loader size="large" text="Loading..."/>
            </div>
        );
    }

}
