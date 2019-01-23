/* eslint-disable */

class ControlledThumbnail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    const { selected } = this.state;

    return (
      <Thumbnail
        selected={selected}
        title="Thumbnail"
        description={`This thumbnail is ${selected ? "" : "not "}selected `}
        onClick={() =>
          this.setState(({ selected }) => ({ selected: !selected }))
        }
      />
    );
  }
}

render(<ControlledThumbnail />);
