import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';
// Redux
import { createStore } from 'redux';

const defaultState = {};

export default function ({ reducer }) {
  return {
    Meteor,
    Tracker,
    FlowRouter,
    Store: createStore(reducer, defaultState),
  };
}
