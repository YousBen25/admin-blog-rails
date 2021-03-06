class Api::V1::PostsController < ActionController::Base
  protect_from_forgery with: :null_session
  def index
    posts = Post.all
    render json: posts
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def create
    post = Post.create(post_params)
    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
