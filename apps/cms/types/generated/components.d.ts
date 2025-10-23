import type { Schema, Struct } from '@strapi/strapi';

export interface AboutMeStat extends Struct.ComponentSchema {
  collectionName: 'components_about_me_stats';
  info: {
    displayName: 'Stat';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutMeTrait extends Struct.ComponentSchema {
  collectionName: 'components_about_me_traits';
  info: {
    displayName: 'Trait';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Links';
    icon: 'link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['GitHub', 'LinkedIn', 'Twitter', 'Facebook', 'Instagram']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SkillsCategory extends Struct.ComponentSchema {
  collectionName: 'components_skills_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    skills: Schema.Attribute.Component<'skills.item', true>;
  };
}

export interface SkillsItem extends Struct.ComponentSchema {
  collectionName: 'components_skills_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    proficiency: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 1;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-me.stat': AboutMeStat;
      'about-me.trait': AboutMeTrait;
      'shared.social-links': SharedSocialLinks;
      'skills.category': SkillsCategory;
      'skills.item': SkillsItem;
    }
  }
}
