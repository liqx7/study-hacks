# egg+mongodb+umi全栈开发
## 学习mongo语法，操作
- 链接
	- mongodb://admin:123456@localhost:6666/test
	- mongo (shell)
- 数据库
	- show dbs
	- use test
	- db
	- db.dropDatabase()
- 集合
	- show tables/collections
	- db.coll.drop()
	- db.coll.update()
	- db.coll.save()
	- db.coll.remove()
	- db.coll.find(query,).pretty()
		- 条件
			 - $lt,..
			 - $type
		- 操作
			- .limit()
			- .skip()
	- .sort()
	- 索引 db.coll.createIndex()
	- 聚合 db.aggregate([管道])
- document

