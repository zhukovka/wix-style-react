/* eslint-disable */
class MyComponent extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col span="3" />
          <Col span="6">
            <Card>
              <Card.Content>
                <Container fluid>
                  <Row>
                    <Col>
                      <FormField label="Name">
                        <Input />
                      </FormField>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormField label="Title">
                        <Dropdown
                          options={[
                            { id: 0, value: 'Mr' },
                            { id: 1, value: 'Ms' },
                          ]}
                        />
                      </FormField>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Box align="right">
                        <Box marginRight={2}>
                          <Button skin="secondary">Cancel</Button>
                        </Box>
                        <Button>Submit</Button>
                      </Box>
                    </Col>
                  </Row>
                </Container>
              </Card.Content>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
