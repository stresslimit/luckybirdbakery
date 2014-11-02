var request = require('code42day/jsonp')
var ready = require('desandro/doc-ready')
var _ = require('jashkenas/underscore')
window.React = require('reactjs/react-bower@v0.12.0:react-with-addons.js')
var ig = require('./component-ig')



ready( function () {
  request( 'https://api.instagram.com/v1/users/179800992/media/recent' )
    .query({ 'client_id': '68a404797c3947918fc87393f191c2f1' })
    .end( function (res) {
      if ( res.meta.code == 200 ) {
        var contains_tag_lb = _.filter( res.data, function (post) {
          return _.contains( post.tags, 'lb' )
        })
        insert_instagram( contains_tag_lb )
      }
    })
})

function insert_instagram( posts ) {
  ig = React.createFactory( ig )
  React.render( ig({ posts: _.sample( posts, 3 ) }), document.querySelector('#instagram') )
}
