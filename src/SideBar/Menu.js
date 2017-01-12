import css from './Menu.scss';
import React from 'react';
import classnames from 'classnames';
import findIndex from 'lodash.findindex';

class Menu extends React.Component {
  render() {
    const {items, selectedId, onSelect = () => {}} = this.props;

    return (
      <div>
        {items.map(item => this._renderItem({item, selectedId, onSelect}))}
      </div>
    );
  }

  _renderItem({item, selectedId, onSelect}) {
    if (item.children) {
      return this._renderGroup({item, selectedId, onSelect});
    } else {
      return this._renderSelection({item, selectedId, onSelect});
    }
  }

  _renderGroup({item, selectedId, onSelect}) {

    const {title, children, id} = item;

    const selectedChild = findIndex(children, c => c.id === selectedId);
    const selected = selectedId === id || selectedChild > -1;

    const height = !selected ? 0 : ((children.length * 48) - 18);  /* 48 is item height, 18 is last item margin */
    const top = !selected ? 0 : (selectedChild * 42) || 0;

    const cn = classnames({
      [css.group]: selected,
    });

    const titleCn = classnames({
      [css.grouptitle]: selected,
      [css.title]: !selected
    });

    return (
      <div className={cn} key={id}>
        <div className={titleCn} onClick={() => onSelect(id)} >
          {title}
        </div>
        <div className={css.groupitems} style={{height}} >
          <div className={css.groupmask} style={{top}}/>
          {children.map(item => {
            return this._renderSelection({item, selectedId, onSelect});
          })}
        </div>
      </div>
    );
  }

  _renderSelection({item, selectedId, onSelect}) {

    const {title, id} = item;

    const cn = classnames({
      [css.title]: true,
      [css.selected]: id === selectedId
    });

    return (
      <div className={cn} key={id} onClick={() => onSelect(id)} >
        {title}
      </div>
    );
  }

  static propTypes = {
    items: React.PropTypes.array.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    selectedId: React.PropTypes.any
  }

  static displayName = 'SideBar.Menu'

}

export default Menu;
