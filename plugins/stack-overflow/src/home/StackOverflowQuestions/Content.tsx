/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useApi, configApiRef } from '@backstage/core-plugin-api';
import { Link, Progress, ErrorPanel } from '@backstage/core-components';
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import useAsync from 'react-use/lib/useAsync';
import qs from 'qs';
import React from 'react';
import {
  StackOverflowQuestion,
  StackOverflowQuestionsContentProps,
} from '../../types';

export const Content = (props: StackOverflowQuestionsContentProps) => {
  const { requestParams } = props;
  const configApi = useApi(configApiRef);
  const baseUrl = configApi.getOptionalString('stackoverflow.baseUrl');

  const { value, loading, error } = useAsync(async () => {
    const params = requestParams ? `?${qs.stringify(requestParams)}` : '';
    const response = await fetch(`${baseUrl}/questions${params}`);
    const data = await response.json();
    return data.items as StackOverflowQuestion[];
  }, []);

  if (loading) {
    return <Progress />;
  }

  if (error) {
    return <ErrorPanel error={error} />;
  }

  const getSecondaryText = (answer_count: Number) =>
    answer_count > 1 ? `${answer_count} answers` : `${answer_count} answer`;

  return (
    <List>
      {value?.length &&
        value.map(question => (
          <ListItem key={question.link}>
            <Link to={question.link}>
              <ListItemText
                primary={question.title}
                secondary={getSecondaryText(question.answer_count)}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="external-link">
                  <OpenInNewIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </Link>
          </ListItem>
        ))}
    </List>
  );
};
