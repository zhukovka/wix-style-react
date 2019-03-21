/* eslint-disable */
import React from 'react';

import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';
import Card from 'wix-style-react/Card';

import { Breadcrumbs } from 'wix-style-react/Breadcrumbs';
import Box from 'wix-style-react/Box';
import PopoverMenu from 'wix-style-react/PopoverMenu';
import PopoverMenuItem from 'wix-style-react/PopoverMenuItem';
import { Row, Col, Container } from 'wix-style-react/Grid';

class Example extends React.Component {
  render() {
    return (
      <ExamplePageContainer>
        <Page upgrade>
          {this.renderHeader()}
          <Page.Content>
            <Container>
              <Row stretchViewsVertically>
                <Col span={8}>
                  <Card>
                    <Card.Content>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam facilisis molestie magna vitae pellentesque. Ut
                        elementum accumsan nibh, ut faucibus velit. Vestibulum
                        at mollis justo. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia Curae;
                        In sapien odio, hendrerit a iaculis ut, venenatis in
                        ligula. Vestibulum suscipit egestas augue, nec mattis
                        est mollis et. Curabitur id eleifend leo. Fusce tempor
                        efficitur commodo.
                        <br />
                        <br />
                        Cras porta augue non erat imperdiet ornare. Aliquam
                        aliquam elit nec erat ultricies, ac blandit purus
                        efficitur. Suspendisse sagittis id nibh eget pulvinar.
                        Phasellus congue ultricies interdum. Mauris vel dolor at
                        diam feugiat imperdiet feugiat varius eros. Aenean
                        accumsan interdum massa vitae semper. Maecenas tincidunt
                        ut lectus a fringilla. In eleifend ante in tellus
                        consequat vestibulum. Fusce lacinia turpis quis turpis
                        semper venenatis. Donec faucibus felis nisi, non maximus
                        augue mattis ac. Ut erat sem, finibus vel gravida sed,
                        hendrerit ac nibh. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aliquam et egestas lectus.
                        Ut vitae est maximus, viverra sem et, pharetra diam.
                        <br />
                        <br />
                        Vivamus quis nunc maximus elit ullamcorper ullamcorper
                        non sit amet metus. Mauris consequat tortor ac ante
                        vestibulum lacinia. Vestibulum molestie risus purus, nec
                        faucibus odio iaculis vitae. Integer erat magna,
                        interdum et venenatis vel, aliquet id nunc. Vivamus nec
                        pharetra dui. Nam sed quam ultricies, molestie dui a,
                        tempus felis. Pellentesque tincidunt tortor eu tempus
                        porttitor. Nam vitae dapibus lacus, a gravida ligula.
                        Vestibulum eget pulvinar mauris. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; In hac habitasse platea dictumst. Sed
                        ultrices bibendum urna, elementum condimentum est
                        faucibus et. Aenean a hendrerit ipsum. Sed aliquam
                        ligula sed magna commodo, sit amet fringilla urna
                        scelerisque. Phasellus at felis sed neque euismod
                        tincidunt vitae id leo.
                        <br />
                        <br />
                        Donec vel felis id mauris iaculis posuere eget eu purus.
                        Duis id libero dolor. Vivamus nec ornare nunc. Ut
                        efficitur quis sem quis consectetur. Suspendisse et
                        justo ac sem rhoncus posuere et eget quam. Phasellus sit
                        amet viverra nulla, vel tincidunt ante. Duis nec commodo
                        lorem.
                        <br />
                        <br />
                        Proin orci nisl, facilisis ut efficitur sit amet,
                        sollicitudin et metus. Nunc dictum laoreet convallis.
                        Praesent iaculis consequat elit non consectetur. In
                        risus ex, efficitur non tempor ac, suscipit ut nisi.
                        Etiam vel vehicula eros. Sed molestie, metus sed
                        tristique fringilla, tortor metus facilisis justo, sit
                        amet blandit dolor urna eget diam. Etiam nec lorem
                        cursus nisl finibus venenatis. Ut consequat dui non
                        pharetra fringilla. Nulla facilisi.
                      </div>
                    </Card.Content>
                  </Card>
                </Col>
                <Col span={4}>
                  <Page.Sticky>
                    <Card>
                      <Card.Header title="Sticky" />
                      <Card.Content>Some menu or other content</Card.Content>
                    </Card>
                  </Page.Sticky>
                </Col>
              </Row>
            </Container>
          </Page.Content>
        </Page>
      </ExamplePageContainer>
    );
  }

  renderHeader() {
    const ActionBar = () => {
      return (
        <Box>
          <Box>
            <PopoverMenu
              buttonTheme="icon-greybackground"
              placement="bottom"
              size="normal"
              appendToParent
              zIndex={1}
            >
              <PopoverMenuItem onClick={() => {}} text="Refresh" />
              <PopoverMenuItem onClick={() => {}} text="Trash" />
            </PopoverMenu>
          </Box>
          <Box marginLeft="small" marginRight="small">
            <Button skin="light">Cancel</Button>
          </Box>
          <Box>
            <Button>Save</Button>
          </Box>
        </Box>
      );
    };

    return (
      <Page.Header
        title="Page Title"
        breadcrumbs={
          <Breadcrumbs
            items={[1, 2, 3].map(i => ({ id: `${i}`, value: `Page ${i}` }))}
            activeId="3"
            size="medium"
            theme="onGrayBackground"
            onClick={() => {}}
          />
        }
        actionsBar={<ActionBar />}
      />
    );
  }
}

const ExamplePageContainer = ({ children }) => (
  <div style={{ height: '372px' }}>{children}</div>
);

render(Example);
