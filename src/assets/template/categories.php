<?php include("header.php") ?>
    <div class="row as-7">

        <div class="col as-12 xl-7">
            <div class="panel h-100p">

                <div class="panel-header p-20">
                    <h1 class="panel-title bold">
                        <i aria-hidden="true" class="icon-sort-three-line mr-10"></i>
                        Kateqoriyalar
                    </h1>
                </div>

                <div class="panel-body p-20">
                    <div class="dd nestable3">
                        <ol class="dd-list">

                            <li class="box box-solid dd-item dd3-item collapsed-box dd-collapsed" data-id="1">

                                <div class="dd-handle dd3-handle">
                                    <i aria-hidden="true" class="icon-arrows"></i>
                                </div>

                                <div class="box-tools dd3-content clearfix">
                                    <span>Category name</span>
                                    <a href="#" class="float-right"><i aria-hidden="true" class="icon-settings"></i></a>
                                </div>

                                <ol class="dd-list">

                                    <li class="box box-solid dd-item dd3-item collapsed-box" data-id="1.1">

                                        <div class="dd-handle dd3-handle">
                                            <i aria-hidden="true" class="icon-arrows"></i>
                                        </div>

                                        <div class="box-tools dd3-content clearfix">
                                            <span>Sub category name</span>
                                            <a href="#" class="float-right"><i aria-hidden="true" class="icon-settings"></i></a>
                                        </div>

                                    </li>

                                    <li class="box box-solid dd-item dd3-item collapsed-box" data-id="1.2">

                                        <div class="dd-handle dd3-handle">
                                            <i aria-hidden="true" class="icon-arrows"></i>
                                        </div>

                                        <div class="box-tools dd3-content clearfix">
                                            <span>Sub category name</span>
                                            <a href="#" class="float-right"><i aria-hidden="true" class="icon-settings"></i></a>
                                        </div>

                                    </li>

                                </ol>

                            </li>


                        </ol>
                    </div>
                </div>

            </div>
        </div>

        <div class="col as-12 mb-10 hide-xl"></div>

        <div class="col as-12 xl-5">
            <div class="panel h-100p">

                <div class="panel-header p-20">

                    <h2 class="panel-title bold float-left">Əlavə et</h2>

                    <select name="" id="" class="float-right border-0 no-shadow">
                        <option value="az">AZ</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>

                </div>

                <div class="panel-body">

                    <div class="row as-7 mb-15">

                        <div class="col as-6 xs-12 p-5">
                            <div class="ckbox">
                                <input type="radio" class="ckbox" id="category" name="category" checked="">
                                <label for="category">Kateqoriya</label>
                            </div>
                        </div>

                        <div class="col as-6 xs-12 p-5">
                            <div class="ckbox">
                                <input type="radio" class="ckbox" id="sub-category" name="category">
                                <label for="sub-category">Alt kateqoriya</label>
                            </div>
                        </div>

                    </div>

                    <div class="clear mb-15">

                        <label>Kateqoriya adı</label>

                        <input class="input" type="text" placeholder="Kateqoriya adını yazın">

                    </div>

                    <div class="clear">

                        <label>Ana kateqoriya</label>

                        <select class="input select">
                            <option class="hidden">Seç</option>
                            <option value="">Category name</option>
                            <option value="">Category name</option>
                            <option value="">Category name</option>
                        </select>
                    </div>
                </div>

                <div class="panel-footer">
                    <button class="btn bg-red border-0 shadow" title="Sil" data-target-modal="alert-modal">
                        <i aria-hidden="true" class="icon-trash mr-10"></i>
                        Sil
                    </button>
                    <button type="submit" class="btn bg-green shadow border-0 float-right" title="Yadda saxla">
                        Yadda saxla
                    </button>
                </div>

            </div>
        </div>

    </div>
<?php include("footer.php") ?>
