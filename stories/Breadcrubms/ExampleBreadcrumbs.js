import React, {Component, PropTypes} from 'react';

import BreadcrumbsTemplate from './BreadcrumbsTemplate';
import RadioGroup from '../../src/RadioGroup';
import Label from '../../src/Label';

import styles from './ExampleBreadcrumbs.scss';

class ExampleStandard extends Component {
	
	static propTypes = {
		onChange: PropTypes.func
	};
	
	state = {
		size: 'medium',
		theme: 'onGrayBackground',
		direction: 'ltr'
	};
	
	render() {
		return (
				<from className={styles.form}>
					<div className={styles.input}>
						<div className={styles.option}>
							<Label>Size</Label>
							<div className={styles.flex}>
								<RadioGroup
										display="horizontal"
										value={this.state.size}
										onChange={size => this.setState({size})}
								>
									<RadioGroup.Radio value="medium">Normal</RadioGroup.Radio>
									<RadioGroup.Radio value="large">Large</RadioGroup.Radio>
								</RadioGroup>
							</div>
						</div>
						<div className={styles.option}>
							<Label>Type</Label>
							<div className={styles.flex}>
								<RadioGroup
										display="horizontal"
										value={this.state.theme}
										onChange={theme => this.setState({theme})}
								>
									<RadioGroup.Radio value="onGrayBackground">On gray background</RadioGroup.Radio>
									<RadioGroup.Radio value="onWhiteBackground">On white background</RadioGroup.Radio>
									<RadioGroup.Radio value="onDarkBackground">On dark background</RadioGroup.Radio>
								</RadioGroup>
							</div>
						</div>
						<div className={styles.option}>
							<Label>Direction</Label>
							<div className={styles.flex}>
								<RadioGroup
										display="horizontal"
										value={this.state.direction}
										onChange={direction => this.setState({direction})}
								>
									<RadioGroup.Radio value="ltr">Left to right</RadioGroup.Radio>
									<RadioGroup.Radio value="rtl">Right to left</RadioGroup.Radio>
								</RadioGroup>
							</div>
						</div>
					</div>
					<div className={styles.output}>
						<div className={`${styles[this.state.theme]} ${styles.exampleWrapper} ${this.state.direction}`}>
							<BreadcrumbsTemplate {...this.state} onChange={this.props.onChange}/>
						</div>
					</div>
				</from>
		);
	}
}

export default ExampleStandard;
