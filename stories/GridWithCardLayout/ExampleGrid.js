import React from 'react';
import classNames from 'classnames';
import grid from '../../src/Grid'
import card from '../../src/Card'
import styles from './ExampleGrid.scss'

import TextField from '../../src/TextField';
import Input from '../../src/Input';
import Label from '../../src/Label';

function renderStandardInput() {
  return (
    <TextField>
      <Label
        for="textField"
      >
        Text Field
      </Label>
      <Input
        id="textField"
        placeholder="Default text goes"
      />
    </TextField>
  );
}

export default () =>
  <div data-hook="card-example" className={styles.exampleContainer}>
    <div className={`${grid.wixContainer}`}>
      <div className={grid.row}>
        <div className={grid.colXs8}>
          <div className={card.card}>
            <div className={`${card.header} ${card.withDivider}`}>
              <div className={card.title}>
                Header with Divider
              </div>
            </div>
            <div className={card.content}>
              <div className={grid.row}>
                <div className={grid.colXs4}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs4}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs4}>
                  {renderStandardInput()}
                </div>
              </div>
              <div className={grid.row}>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
              </div>
              <div className={grid.row}>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs3}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs3}>
                  {renderStandardInput()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={grid.colXs4}>
          <div className={card.card}>
            <div className={card.header}>
              <div className={card.title}>
                Side Card
              </div>
            </div>
            <div className={card.content}>
              <div className={grid.row}>
                <div className={grid.colXs12}>
                  {renderStandardInput()}
                </div>
              </div>
              <div className={grid.row}>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
              </div>
              <div className={grid.row}>
                <div className={grid.colXs12}>
                  {renderStandardInput()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.colXs12}>
          <div className={card.card}>
            <div className={card.header}>
              <div className={card.title}>
                Main card
              </div>
              <div className={card.subtitle}>
                Subtitle
              </div>
            </div>
            <div className={card.content}>
              <div className={grid.row}>
                <div className={grid.colXs4}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs4}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs4}>
                  {renderStandardInput()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.colXs6}>
          <div className={card.card}>
            <div className={card.header}>
              <div className={card.title}>
                Card Header
              </div>
            </div>
            <div className={card.content}>
              <div className={grid.row}>
                <div className={grid.colXs4}>
                  {renderStandardInput()}
                </div>
              </div>
              <div className={grid.row}>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
              </div>
              <div className={grid.row}>
                <div className={grid.colXs12}>
                  {renderStandardInput()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={grid.colXs6}>
          <div className={card.card}>
            <div className={card.header}>
              <div className={card.title}>
                Card header
              </div>
            </div>
            <div className={card.content}>
              <div className={grid.row}>
                <div className={grid.colXs4}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs4}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs4}>
                  {renderStandardInput()}
                </div>
              </div>
              <div className={grid.row}>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
              </div>
              <div className={grid.row}>
                <div className={grid.colXs12}>
                  {renderStandardInput()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.colXs4}>
          <div className={card.card}>
            <div className={card.header}>
              <div className={card.title}>
                Card header
              </div>
            </div>
            <div className={card.content}>
              <div className={grid.row}>
                <div className={grid.colXs12}>
                  {renderStandardInput()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={grid.colXs4}>
          <div className={card.card}>
            <div className={card.header}>
              <div className={card.title}>
                Card header
              </div>
            </div>
            <div className={card.content}>
              <div className={grid.row}>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={grid.colXs4}>
          <div className={card.card}>
            <div className={card.header}>
              <div className={card.title}>
                Card header
              </div>
            </div>
            <div className={card.content}>
              <div className={grid.row}>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
                <div className={grid.colXs6}>
                  {renderStandardInput()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
