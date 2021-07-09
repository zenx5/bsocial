//  APIS endpoint
export const API_LOGIN = ' https://bsocial.at/api/auth/login'
export const API_REGISTER = ' https://bsocial.at/api/auth/register'
export const API_AUTH = ' https://bsocial.at/api/customer'
export const API_HOME = 'https://bsocial.at/api/events'
export const API_ALL_CATEGORIES = 'https://bsocial.at/api/categories'
export const API_CREATE_NEW_EVENT = 'https://bsocial.at/api/events/store'

//  maps styles
export const MAP_STYLE = [
  {
    featureType: 'administrative',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on'
      },
      {
        lightness: 33
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#efefef'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e3eed3'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on'
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#83a5b0'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#bdcdd3'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#b5cbe4'
      }
    ]
  }
]
