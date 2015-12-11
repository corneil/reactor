/*
 * Copyright (c) 2011-2016 Pivotal Software Inc, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import vis           from 'vis';
import Box           from '../components/Box';
import JSON           from 'JSON2';
import Rx            from 'rx-lite';

const propTypes = {
    network: React.PropTypes.object, nodes: React.PropTypes.object, edges: React.PropTypes.object
};

class Studio extends React.Component {

    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(e)
    }

    render() {
        return (
            <DocumentTitle title="Reactor Console • Studio">
                <section className="studio">
                    <div className="section-heading">
                        Studio
                    </div>
                    <div className="section-content">
                        <Box cols="1" heading="Observing Station">
                            <div id="observing"></div>
                        </Box>
                        <Box heading="Editor">
                            <div className="editor">
                                <form onSubmit={this.onSubmit.bind(this)}>
                                    <p>
                                        <pre><textarea ref="replay"></textarea></pre>
                                    </p>
                                    <p className="action">
                                        <button className="btn btn-primary btn-block" type="submit">Run</button>
                                    </p>
                                </form>
                            </div>
                        </Box>

                        <Box heading="Timeline">
                            <div id="timeline"></div>
                        </Box>
                    </div>
                </section>
            </DocumentTitle>
        );
    }

}

Map.propTypes = propTypes;

export default Studio;