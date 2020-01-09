import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  TitleWrapper,
  GeneralWrapper,
  ProblemWrapper,
  SidebarWrapper,
  TimeWrapper,
  TagSectionWrapper,
  TagNameWrapper,
  SubmitWrapper,
} from './Problem.style';

class Problem extends Component {
  componentDidMount() {
    this.props.getProblemDetail(this.props.match.params.id)
  }
  render() {
    const { problem } = this.props;
    console.log(problem.tags)
    return (
      <GeneralWrapper>
        <ProblemWrapper>
          <div>
            <h5 style={{ textAlign: "center" }}>{problem.name}</h5>
            <div>{problem.content}</div>
          </div>
        </ProblemWrapper>
        <SidebarWrapper>
          <TimeWrapper>
            <div>
              <TitleWrapper>Time</TitleWrapper>
            </div>
            <div>Time</div>
          </TimeWrapper>
          <TagSectionWrapper>
            <div>
              <TitleWrapper>Problem tags</TitleWrapper>
              <div>
              {(problem.tags || []).map(tag => (<TagNameWrapper>{tag}</TagNameWrapper>))}
              </div>
            </div>
          </TagSectionWrapper>
          <SubmitWrapper>
            <div>
              <TitleWrapper>Submit</TitleWrapper>
              <input type="file" />
            </div>
            <div><button onClick={}>Submit</button></div>
          </SubmitWrapper>
        </SidebarWrapper>
      </GeneralWrapper>
    )
  }
}

export default withRouter(Problem)
