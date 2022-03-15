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

import React, { MouseEvent, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useAsync from 'react-use/lib/useAsync';

import { Link } from '@material-ui/core';

import {
  techdocsStorageApiRef,
  useTechDocsReader,
} from '@backstage/plugin-techdocs';
import { useApi } from '@backstage/core-plugin-api';

/** Make sure that the input url always ends with a '/' */
const normalizeUrl = (url: string) => {
  const value = new URL(url);

  if (!value.pathname.endsWith('/') && !value.pathname.endsWith('.html')) {
    value.pathname += '/';
  }

  return value.toString();
};

const A = ({ href = '', download, children }: JSX.IntrinsicElements['a']) => {
  const navigate = useNavigate();

  // if link is external, add target to open in a new window or tab
  const target = useMemo(() => {
    return href.match(/^https?:\/\//i) ? '_blank' : undefined;
  }, [href]);

  const { path, entityRef } = useTechDocsReader();
  const techdocsStorageApi = useApi(techdocsStorageApiRef);

  const { value } = useAsync(async () => {
    const baseUrl = await techdocsStorageApi.getBaseUrl(href, entityRef, path);
    if (download) return baseUrl;
    const base = normalizeUrl(window.location.href);
    return new URL(href, base).toString();
  }, [href, download, path, entityRef, techdocsStorageApi]);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (!value || target) return;

      event.preventDefault();

      const { pathname, hash } = new URL(value.replace('.md', ''));
      const url = pathname.concat(hash);

      // detect if CTRL or META keys are pressed
      // so that links can be opened in a new tab
      if (event.ctrlKey || event.metaKey) {
        window.open(url, '_blank');
        return;
      }

      navigate(url);
    },
    [value, target, navigate],
  );

  return value ? (
    <Link
      target={target}
      download={download}
      href={value}
      onClick={handleClick}
    >
      {children}
    </Link>
  ) : null;
};

export { A as a };
