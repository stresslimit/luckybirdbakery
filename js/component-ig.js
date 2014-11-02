var React = require('reactjs/react-bower@v0.12.0:react-with-addons.js')
var E = React.DOM



module.exports = React.createClass({
  render_img: function (post) {
    return E.div({ className: 'ig-post col-sm-4 col-xs-6' },
      E.a({ href: post.link },
        E.img({ src: post.images.standard_resolution.url })
      )
    )
  },
  render: function() {
    if ( this.props.posts.length >0 )
      return E.div({},
        E.h2({}, 'From our Instagram'),
        E.div({ className: 'row' },
          this.props.posts.map( this.render_img )
        )
      )
  }
})
