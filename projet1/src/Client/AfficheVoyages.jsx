import React from 'react';
import './App.css';
import axios from 'axios';
let ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
class AfficheVoyage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            login: "",
            Erreur: "",
            idMax: 0,
            voyages: ""
        }

        axios.post('getAllVoyages', this.state.idMax)
            .then(res => {
                this.setState({voyages:JSON.parse(res.data)})
            })

        this.handlechange = this.handlechange.bind(this)

    }

    handlechange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state);

    }

    render() {
        return (
            <div>
               <div id="fh5co-portfolio">
			<div class="container">
				<div id="main">
					<div class="row text-center">
						<div class="col-md-4 col-sm-4">
							<a href='example.html#basic' class="example-anchor">
								<div class="services animate-box" data-href="example.html#basic">
									<span><i class="icon-table"></i></span>
									<h3>Basic Table</h3>
									<p>A basic usage for react-bootstrap-table, include vertical and horizontal scroll example</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#sort' class="example-anchor">
								<div class="services animate-box" data-href="example.html#sort">
									<span><i class="icon-sort-alpha-asc"></i></span>
									<h3>Sort Column</h3>
									<p>Show how to enable sorting and some custom sorting</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#column' class="example-anchor">
								<div class="services animate-box" data-href="example.html#column">
									<span><i class="icon-dial-pad"></i></span>
									<h3>Work on Column</h3>
									<p>Demo for how to configure the column with, align, title and hidden etc.</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#column-format' class="example-anchor">
								<div class="services animate-box" data-href="example.html#column-format">
									<span><i class="icon-tools-2"></i></span>
									<h3>Column Format</h3>
									<p>Customize your data cell by HTML string or React component</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#column-filter' class="example-anchor">
								<div class="services animate-box" data-href="example.html#column-filter">
									<span><i class="icon-filter"></i></span>
									<h3>Column Filter</h3>
									<p>Show you how to configure the filter on table, ex: text, select, number, date filter etc</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#selection' class="example-anchor">
								<div class="services animate-box" data-href="example.html#selection">
									<span><i class="icon-check"></i></span>
									<h3>Row Selection</h3>
									<p>This is import feature for a table. This example show you how to use it practically</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#pagination' class="example-anchor">
								<div class="services animate-box" data-href="example.html#pagination">
									<span><i class="icon-next"></i></span>
									<h3>Pagination</h3>
									<p>How to enable pagination and show you to customize your pagination props</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#manipulation' class="example-anchor">
								<div class="services animate-box" data-href="example.html#manipulation">
									<span><i class="icon-pencil2"></i></span>
									<h3>Manipulation</h3>
									<p>It's all about data manipulation, insert, delete, search and exporting csv etc</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#celledit' class="example-anchor">
								<div class="services animate-box" data-href="example.html#celledit">
									<span><i class="icon-new-message"></i></span>
									<h3>Cell Edit</h3>
									<p>We have the cell edit feature to update cell data easily.</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#style' class="example-anchor">
								<div class="services animate-box" data-href="example.html#style">
									<span><i class="icon-palette"></i></span>
									<h3>Table Style</h3>
									<p>This component allow you to add your own class or style on anywhere on table</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#remote' class="example-anchor">
								<div class="services animate-box" data-href="example.html#remote">
									<span><i class="icon-database2"></i></span>
									<h3>Remote</h3>
									<p>This let you manage state out of table. This example will show you how to do this</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#header-group' class="example-anchor">
								<div class="services animate-box" data-href="example.html#header-group">
									<span><i class="icon-make-group"></i></span>
									<h3>Header Group</h3>
									<p>To customize your table with row&col span for a group feature</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#keyboard-navigation' class="example-anchor">
								<div class="services animate-box" data-href="example.html#keyboard-navigation">
									<span><i class="icon-swap"></i></span>
									<h3>Keyboard Navigation</h3>
									<p>Support keyboard and clicking to navigate cell by cell, just like stylesheets</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#expand' class="example-anchor">
								<div class="services animate-box" data-href="example.html#expand">
									<span><i class="icon-expand"></i></span>
									<h3>Row Expand</h3>
									<p>Expand row by clicking for showing more detail for row content or sub table.</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#advance' class="example-anchor">
								<div class="services animate-box" data-href="example.html#advance">
									<span><i class="icon-grid"></i></span>
									<h3>Advance</h3>
									<p>Some examples for showing the edit type or validation for the cell edit and insert</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#others' class="example-anchor">
								<div class="services animate-box" data-href="example.html#others">
									<span><i class="icon-desktop"></i></span>
									<h3>Others</h3>
									<p>Include some not very important feature demo. You can ask any example here</p>
								</div>
							</a>
						</div>
						<div class="col-md-4 col-sm-4">
							<a href='example.html#custom' class="example-anchor">
								<div class="services animate-box" data-href="example.html#custom">
									<span><i class="icon-gears"></i></span>
									<h3>Customizarion</h3>
									<p>High ability and easily to customize your table</p>
								</div>
							</a>
						</div>
					</div>
				</div>

				<div id="example-section">
				</div>
			</div>
		</div>

            </div>
        );
    }
}

export default AfficheVoyage;