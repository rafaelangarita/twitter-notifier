#!/usr/bin/env node

/**
 * @file
 * Binding Component starter automatically generated by
 * the Social Communication Platform.
 */

var bc = require('./amqp-endpoint-direct');
var bc2 = require('./amqp-endpoint-timeline');
var bc3 = require('./routes/messenger');

bc.listen();
bc2.listen();
bc3.listenDirectMessage();
