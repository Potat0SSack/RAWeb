import { Link } from '@inertiajs/react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  BaseBreadcrumb,
  BaseBreadcrumbItem,
  BaseBreadcrumbLink,
  BaseBreadcrumbList,
  BaseBreadcrumbPage,
  BaseBreadcrumbSeparator,
} from '../+vendor/BaseBreadcrumb';
import { GameTitle } from '../GameTitle';

interface GameBreadcrumbsProps {
  t_currentPageLabel: string;

  game?: App.Platform.Data.Game;
  system?: App.Platform.Data.System;
}

export const GameBreadcrumbs: FC<GameBreadcrumbsProps> = ({ t_currentPageLabel, game, system }) => {
  const { t } = useTranslation();

  return (
    <div className="navpath mb-3 hidden sm:block">
      <BaseBreadcrumb>
        <BaseBreadcrumbList>
          <BaseBreadcrumbItem aria-label={t('All Games')}>
            <BaseBreadcrumbLink asChild>
              <Link href={route('game.index')}>{t('All Games')}</Link>
            </BaseBreadcrumbLink>
          </BaseBreadcrumbItem>

          {system ? (
            <>
              <BaseBreadcrumbSeparator />

              <BaseBreadcrumbItem aria-label={system.name}>
                <BaseBreadcrumbLink href={route('system.game.index', system.id)}>
                  {system.name}
                </BaseBreadcrumbLink>
              </BaseBreadcrumbItem>
            </>
          ) : null}

          {game ? (
            <>
              <BaseBreadcrumbSeparator />
              <BaseBreadcrumbItem aria-label={game.title}>
                <BaseBreadcrumbLink href={route('game.show', { game: game.id })}>
                  <GameTitle title={game.title} />
                </BaseBreadcrumbLink>
              </BaseBreadcrumbItem>
            </>
          ) : null}

          <BaseBreadcrumbSeparator />

          <BaseBreadcrumbItem aria-label={t_currentPageLabel}>
            <BaseBreadcrumbPage>{t_currentPageLabel}</BaseBreadcrumbPage>
          </BaseBreadcrumbItem>
        </BaseBreadcrumbList>
      </BaseBreadcrumb>
    </div>
  );
};