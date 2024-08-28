import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from "@storybook/types";
import {
  useEffect,
} from '@storybook/preview-api';

declare const Drupal: any;

export const detachDrupalBehaviors = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>,
) => {
  useEffect(()=>{
    if(typeof Drupal !== 'undefined' && Drupal.behaviors) {
        Object.keys(Drupal.behaviors).forEach(key => {
            Drupal.behaviors[key].detach();
        });
    }
  }, []);

  return StoryFn();
};
